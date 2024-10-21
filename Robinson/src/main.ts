import './style.css'
import { renderHome } from './pages/home/home';
import { renderSelection } from './pages/selection/selection';

const body = document.querySelector('.body') as HTMLElement;

const renderSite = () => {
  renderHome();
  renderSelection();
}


renderSite();


export {body};