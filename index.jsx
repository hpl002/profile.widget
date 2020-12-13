import { css } from "uebersicht"

const profileContaienr = css`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

const profilePic = css`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: auto;
  box-shadow: 0 3px 6px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.12);
`

export const render = () => (
    <div className={profileContaienr}>
            <img className={profilePic} src="/ubersicht-stacc/symbols/light.svg" alt=""/>                      
    </div>
)
