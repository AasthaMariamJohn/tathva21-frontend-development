import Dropbox from './Dropbox'

import styles from './section2.module.css'

export default function Section2({ refId, jwt }) {
	return (
		<div className={styles['section2']}>
			<div className={styles['note-wrapper']}>
				<h2>Note</h2>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</p>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</p>
			</div>

			<div className={styles['file-submit-wrapper']}>
				<input type='file' />
			</div>
		</div>
	)
}
