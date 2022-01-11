import Loader from "@/components/common/loader";
import getWorkshops from "@/lib/workshops/getWorkshops";
import { useState, useEffect } from "react";
import Link from "next/link";
import registerWorkshop from "@/lib/workshops/registerWorkshop";
import { useUserContext } from "@/context/userContext";
export default function Workshops() {
  const {user}=useUserContext()
  const [Workshops, setWorkshops] = useState(null);
  useEffect(() => {
    getWorkshops(setWorkshops);
  }, []);
  return (
    <div>
      {Workshops ? (
        <div>
          {Workshops.map((workshop) => (
            <div key={workshop.id}>
              <Link href={`/workshops/${workshop.slug}`} passHref>
                {workshop.name}
              </Link>
              <button
                onClick={() => {
                  registerWorkshop(workshop.id, user.id, user.jwt);
                }}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
