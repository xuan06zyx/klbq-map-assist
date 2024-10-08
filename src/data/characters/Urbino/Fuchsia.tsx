import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Fuchsia,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/5Vbc3mYw8KJtTDC.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/tkQ3jlHGeRTDPyn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/5ZCmFuQhoP3zYnV.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/rOxFKuLX7e5QWhw.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/TU81atfzDKiRV2o.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/tkQ3jlHGeRTDPyn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/5ZCmFuQhoP3zYnV.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/rOxFKuLX7e5QWhw.png',
				generateOnCanvas: ultimate
			}
		}
	},
}

function active() {
	return;
}

function passive() {
	return;
}

function ultimate() {
	return;
}

export default character;