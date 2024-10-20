import './style.css'
import { renderHome } from './pages/home/home';

const body = document.querySelector('.body') as HTMLElement;

const renderSite = () => {
  renderHome();
}


renderSite();


export {body};