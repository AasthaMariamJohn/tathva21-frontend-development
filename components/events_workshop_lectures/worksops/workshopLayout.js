import { Center } from "@chakra-ui/react";
import Link from "next/link";
import style from "@/components/events_workshop_lectures/ewl.module.css";

export default function Workshoplayout({children}) {
      const workshops=[{
            id:1,
            title:"Data Science",
            link:"/workshops/data-science"
          },
          {
            id:2,
            title:"Digital Marketing and SEO",
            link:"/workshops/digital-marketing-and-seo"
          },
          {
            id:3,
            title:"Metaverse, NFTs and Digital Realities",
            link:"/workshops/metaverse-nf-ts-and-digital-realities"
          },
          {
            id:4,
            title:"Web Development and Design",
            link:"/workshops/web-development-and-design"
          },
         
        
        ]
  return (
    <div>
      <div className={style.list}>
        <ul>
          {workshops.map((workshop) => (
            <li key={workshop.id}>
              <Link href={workshop.link} passHref>
                <a>{workshop.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Center>
        <div className={style.listmobile}>
          <ul>
            {workshops.map((workshop) => (
              <li key={workshop.id}>
                <Link href={workshop.link} passHref>
                  <a>{workshop.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Center>
      <div className={style.main2}>
        {/* <Ewl_component /> */}
        {children}
      </div>
    </div>
  );
}
