import './style.css'
import { renderHome } from './pages/home/home';
import { renderSelection } from './pages/selection/selection';
import { renderSecurity } from './pages/security/security';

const body = document.querySelector('.body') as HTMLElement;

const renderSite = () => {
  renderHome();
  renderSelection();
  renderSecurity();
}


renderSite();


export {body};