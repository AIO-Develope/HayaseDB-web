import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, faGithub, faTwitter, faDiscord, faInstagram, faSun);

export { FontAwesomeIcon };