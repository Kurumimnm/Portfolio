import Header from "@/components/Header";
import Head from "next/head";
import style from "@/styles/index.module.scss"
import { FaJava } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { 
  SiGithub, 
  SiGmail,
  SiHtml5,
  SiInstagram,
  SiLinux,
  SiNotion,
  SiPhp,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiRust,
  SiSlack,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiAnaconda,
  SiDart,
  SiCss3,
  SiBootstrap,
  SiFlutter,
  SiMysql,
  SiFigma,
  SiFlask,
  SiDiscord,
  SiSass,
  SiJavascript
} from "react-icons/si";


export default function Home() {
  return (
    <div className={style.display}>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />

      <div className={style.profile}>
        <h2 className={style.name}>本杉　昂大</h2>
        <p className={style.subName}>Motosugi　  Takahiro</p>
      </div>

      <div className={style.info}>
        <p className={style.detail}>
          2003年生まれ<br/>
          ECCコンピュータ専門学校<br/>
          高度情報処理研究学科<br/>
          IT開発エキスパートコース<br/>
          ２年<br/>
          IoT部所属
        </p>
      </div>

      <div className={style.introduction}>
        <h3>
          ～自己紹介～
        </h3>
        <p>
          Webを作ったり、アプリを作るのが好きです。<br/>
          最近はIoTなどの機械製作やってます。
        </p>
      </div>

      <div id="works" className={style.works}>
        <h2 className={style.title}>制作物</h2>
        <p>急遽作ったサイトなので今後更新予定です。</p>
          <div className={style.protopedia}>
            <a href="https://protopedia.net/prototyper/kurumi">
              <img src="img/protopedia-icon.jpg" alt="" className={style.imageicon}></img>
              <img src="img/protopedia.png" alt="" className={style.image}></img>
            </a>
            <p> すべてではないですが一応過去の作品が載せてあります。</p>
          </div>
      </div>

      <div id="skills" className={style.skills}>
        <h2>使える技術</h2>
        <SiHtml5 className={style.icon}/>
        <SiCss3 className={style.icon}/>
        <SiSass className={style.icon}/>
        <SiJavascript className={style.icon}/>
        <SiTypescript className={style.icon}/>
        <SiReact className={style.icon} />
        <br/>
        <SiPython className={style.icon}/>
        <FaJava className={style.icon}/>
        <SiFlutter className={style.icon}/>
        <SiDart className={style.icon}/>
        <SiRaspberrypi className={style.icon}/>
        <SiMysql className={style.icon}/>

        <h2>勉強中</h2>
        <SiRust className={style.icon}/>
        <SiRedis className={style.icon}/>
      </div>

      
      <div id="links" className={style.links}>
        <p className={style.mail}>oretaka1113@gmail.com</p>
        <div className={style.icons}>
          <a href="https://github.com/Kurumimnm"><SiGithub className={style.icon}/></a>
          <a href="https://twitter.com/ECCcompIE_Moto"><RiTwitterXFill className={style.icon}/></a>
          <a href="https://www.instagram.com/takaaaaa1113/"><SiInstagram className={style.icon}/></a>
        </div>
      </div>
      
    </div>
  );
}
