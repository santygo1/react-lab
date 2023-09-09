import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {dvfuPrograms} from "./dvfuPrograms";


const listProf = [
    {
        prof: "Web-разработчиков",
        discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
пользователям было быстро и удобно.`
    },
    {
        prof: "Гейм-девелоперов",
        discr: `Создают видеоигры. Погружают всех нас в новые миры.`
    },
    {
        prof: "AI/ML-cпециалистов",
        discr: `Используют в деле искусственный интеллект и машинное
обучение. Фактами и прогнозами делает бизнесу хорошо.`
    },
    {
        prof: "Аналитиков данных", discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
бизнесу получать еще больше денег.`
    },
    {
        prof: "Мобильных разработчиков",
        discr: `Создают мобильные приложения, которые найдут тебя везде.
Умещают на маленьких экранах максимальный функционал.`
    }
]


const listImg = ["logo_dvfu.png", "logo_imct.png"]

function Head(props) {

    const logoImages = props.listImg.map((img, index) =>
        <img key={index} src={img}/>
    );
    return (
        <div className="head">
            {logoImages}
        </div>
    )
}


function Tagline() {

    return (
        <h1>
            Хватит уже игр, <br/> пора <br/> разрабатывать и зарабатывать
        </h1>
    )
}

function Button(props) {

    return (
        <a className="button" href={props.href}>{props.val}</a>
    )
}

function Professions(props) {
    const listProf = props.list.map((item, index) =>
        <ProfItem key={index} prof={item.prof} discr={item.discr}/>
    );
    return (
        <div className="prof">
            <h2>{props.title} </h2>
            <ul>
                {listProf}
            </ul>
        </div>
    )
}

function ProfItem(props) {

    const [isOpen, setOpenClose] = React.useState(false);
    const press = () => {
        setOpenClose(!isOpen);
    }

    return (
        <li onClick={press}>
            <span className="left">{props.prof}</span>
            <span className="right">{isOpen ? "×" : "+"}</span>
            {isOpen &&
                <p> {props.discr}</p>
            }
        </li>
    )
}

function DegreePrograms({title, programs}) {
    return (
        <div id={"degreePrograms"} className={"programs"}>
            <h1>Направления подготовки ({title})</h1>
            {programs.map(program => <Program data={program}/>)}
        </div>
    )
}

function Program({data}) {

    const [isOpen, setOpen] = useState(false);


    return (
        <div className={"program"}>
            <div className={"program__header"}>
                <div>
                    <div className={"title"}>{data.title}</div>
                    <div className={"hint"}>{data.full_name}</div>
                </div>

                <div>
                    <div>{data.seats}</div>
                    <div className={"hint"}>на бюджете</div>
                </div>

                <div>
                    <div>{data.score}</div>
                    <div className={"hint"}>{data.score_year}</div>
                </div>

                <button onClick={() => setOpen(!isOpen)}>{isOpen ? "×" : "+"}</button>
            </div>

            {isOpen && <div className={"program__content"}>
                <div className={"info"}>
                    <div className={"objects"}>
                        {data.objects.map(object => <div>
                            <span>{object.title}</span>
                            {" "}
                            <span className={"hint"}>{object.score}</span>
                        </div>)}
                    </div>

                    <div className={"dop"}>
                        <div className={"hint"}>
                            <div>На платном</div>
                            <div>{data.paid}</div>
                        </div>

                        <div className={"hint"}>
                            <div>На платном</div>
                            <div>{data.paid}</div>
                        </div>

                        <div className={"hint"}>
                            <div>Учиться</div>
                            <div>{data.duration}</div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={"about"}>{data.about}</div>
            </div>
            }
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

function Content() {

    return (
        <>
            <Head listImg={listImg}/>
            <Tagline/>
            <Button val={"Хочу учиться!"} href={"#degreePrograms"}/>
            <Professions title="Обучаем на:" list={listProf}/>
            <DegreePrograms title={"Бакалавриат"} programs={dvfuPrograms}/>
        </>
    )
}

root.render(<Content/>)


