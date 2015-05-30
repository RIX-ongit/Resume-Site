/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#xe01c;',
			'icon-apple' : '&#xe001;',
			'icon-windows' : '&#xe002;',
			'icon-finder' : '&#xe003;',
			'icon-skype' : '&#xe004;',
			'icon-linkedin' : '&#xe005;',
			'icon-facebook' : '&#xe006;',
			'icon-google-plus' : '&#xe007;',
			'icon-mail' : '&#xe008;',
			'icon-feed' : '&#xe009;',
			'icon-wordpress' : '&#xe00a;',
			'icon-github' : '&#xe00b;',
			'icon-checkmark' : '&#xe00c;',
			'icon-heart' : '&#xe00d;',
			'icon-star' : '&#xe00e;',
			'icon-bubbles' : '&#xe00f;',
			'icon-pacman' : '&#xe010;',
			'icon-tag' : '&#xe011;',
			'icon-phone' : '&#xe012;',
			'icon-envelop' : '&#xe013;',
			'icon-notebook' : '&#xe014;',
			'icon-location' : '&#xe015;',
			'icon-camera' : '&#xe016;',
			'icon-home' : '&#xe017;',
			'icon-user' : '&#xe018;',
			'icon-busy' : '&#xe019;',
			'icon-pie' : '&#xe01a;',
			'icon-signup' : '&#xe01b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};