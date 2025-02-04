import React from 'react'
import Head from 'next/head'
import style from 'styles/social.module.css'

const Social = () => {
  return (
    <div className={style['body']}>
      <section className={style['section-4']} id="area-s4">
        <div className={style['lightbar']} data-augmented-ui></div>
        <div className={style['all-hex-grid']}>
          <a
            style={{ gridColumnEnd: 'span 3', justifySelf: 'right' }}
            href="https://github.com/propjockey/augmented-ui"
            title="Leave a star for augmented-ui on GitHub!"
          >
            <div
              data-augmented-ui="all-hex border"

              className={style['inlay-85']}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 34 34">
                <path
                  fill="#000000"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </div>
          </a>
          <a
            style={{ gridColumnEnd: 'span  3' }}
            href="https://twitter.com/James0x57"
            title="Follow me on Twitter for augmented-ui and other PropJockey project updates and info!"
          >
            <div
              data-augmented-ui="all-hex border"
              className={style['inlay-60']}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -15 400 385">
                <path
                  fill="#000000"
                  d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
                />
              </svg>
            </div>
          </a>
          <a
            style={{ gridColumnEnd: 'span  2' }}
            href="/docs/#supporting-augmented-ui"
            title="Please consider supporting augmented-ui"
          >
            <div
              data-augmented-ui="all-hex border"
              className={style['inlay-60']}
            >
              <span className={style['help']}>$</span>
            </div>
          </a>
          <a
            style={{ gridColumnEnd: 'span  2' }}
            href="#area-s4"
            title="Thank you for checking out augmented-ui!"
          >
            <div
              data-augmented-ui="all-hex border"
              className={style['inlay-33']}
            >
              <span className={style['ty']}>Thank<br />You!</span>
            </div>
          </a>
          <a
            style={{ gridColumnEnd: 'span  2' }}
            href="https://github.com/propjockey/css-media-vars"
            title="css-media-vars - a brand new way to write responsive CSS. Named breakpoints, DRY selectors, no scripts, no builds, vanilla CSS."
          >
            <div
              data-augmented-ui="all-hex border"
              className={style['inlay-22']}
            >
              <img src="/img/css-media-vars.png" alt="css-media-vars logo" />
            </div>
          </a>
          <a
            style={{ gridColumnEnd: 'span  2', justifySelf: 'right' }}
            href="/docs/#install"
            title="augmented-ui technical documentation"
          >
            <div
              data-augmented-ui="all-hex border"
              className={style['inlay-22']}
            >
              <div data-augmented-ui-reset>
                <div id="logo" data-augmented-ui className={style['opacity-0.35']}>DOCS</div>
              </div>
            </div>
          </a>
          <a
            style={{ gridColumnEnd: 'span 3' }}
            href="https://github.com/propjockey"
            title="PropJockey GitHub org, home of augmented-ui and many other web libraries and experiments"
          >
            <div
              data-augmented-ui="all-hex border"
              className={style['inlay-9']}
            >
              <img id="pjl" src="/img/propjockey.png" alt="propjockey logo" />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Social
