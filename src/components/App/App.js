import '../../app.scss';
import {useTranslation } from "react-i18next";
import {useSpring, animated} from "@react-spring/web";
import uniqueId from 'lodash/uniqueId.js'


function App() {
    const {t, i18n} = useTranslation()
    const [spring, api] = useSpring(() => ({
    x: 0,
    config: {
        duration: 3000,
    }
    }))

    const changeLanguageHandler = (e) => {
    i18n.changeLanguage(e.target.value)

    api.set({
        x: 0
    })

    api.start({
        x: 400
    })
    }

    return (<>
    <header className={uniqueId('header_')}>
        <nav className={uniqueId('nav_')}>
            <a className={uniqueId('link_')} href="#">{t('linkToHome')}</a>
        </nav>
        
        <select name="language" onChange={changeLanguageHandler} value={i18n.language} className={uniqueId('select_')}>
            {Object.keys(i18n.options.resources).map((lang) => {
            return <option value={lang} key={`lang_${lang}`} className={uniqueId('option_')}>{lang}</option>
            })}
        </select>
    </header>
    <main className={uniqueId('main_')}>
        <animated.h1 style={{...spring}} className={uniqueId('heading_')}>{t('localizationHeader')}</animated.h1>
    </main>
    </>);
}

export default App;