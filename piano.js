let oscillators = [];
const ctx = new AudioContext();
let o = ctx.createOscillator();
window.AudioContext = window.AudioContext || window.webkitAudioContext;
window.addEventListener("keydown", keypress, false);
window.addEventListener("keyup", keyrelease, false);

function createNewOscillator(key, oscillator) {
    var obj = {};
    obj.key = key;
    obj.oscillator = oscillator;
    return obj;
}

function keypress(e){
    o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.connect(ctx.destination);
    var keyCode = e.keyCode;
    console.log(keyCode);
    var frequency = 0;
    switch(keyCode){
		case 81: 
			frequency = 261.63;
		break; //w :D
		case 87: 
			frequency = 293.66; 
		break; //w : D
		case 69: 
			frequency = 329.63; 
		break; //e : E
		case 82: 
			frequency = 349.23; 
		break; //r : F
		case 84: 
			frequency = 392.00; 
		break; //t : G
		case 89: 
			frequency = 440.00; 
		break; //y : A
		case 85: 
			frequency = 493.88; 
		break; //u : B
		case 73: 
			frequency = 523.25; 
		break; //i : C5
		case 79: 
			frequency = 587.33; 
		break; //o : D
		case 80: 
			frequency = 659.25; 
		break; //p : E
		case 219: 
			frequency = 698.46; 
		break; //[ : F
		case 221: 
			frequency = 783.99; 
		break; //] : G
		case 50: 
			frequency = 277.18; 
		break; //2 : C#4
		case 51: 
			frequency = 311.13; 
		break; //3 : D#
		case 53: 
			frequency = 369.99; 
		break; //5 : F#
		case 54: 
			frequency = 415.30; 
		break; //6 : G#
		case 55: 
			frequency = 466.16; 
		break; //7 : A#
		case 57: 
			frequency = 554.37; 
		break; //9 : C#5
		case 48: 
			frequency = 622.25; 
		break; //0 : D#
		case 61: 
			frequency = 739.99; 
		break; //= : F#
		case 90: 
			frequency = 523.25; 
		break; //z : C5
		case 88: 
			frequency = 587.33; 
		break; //x : D
		case 67: 
			frequency = 659.25; 
		break; //c : E
		case 86: 
			frequency = 698.46; 
		break; //v : F
		case 66: 
			frequency = 783.99; 
		break; //b : G
		case 78: 
			frequency = 880.00; 
		break; //n : A
		case 77: 
			frequency = 987.77; 
		break; //m : B
		case 188: 
			frequency = 1046.50; 
		break; //, : C6
		case 190: 
			frequency = 1174.66; 
		break; //. : D
		case 83: 
			frequency = 554.37; 
		break; //s : C#5
		case 68: 
			frequency = 622.25; 
		break; //d : D#
		case 71: 
			frequency = 739.99; 
		break; //g : F#
		case 72: 
			frequency = 830.61; 
		break; //h : G#
		case 74: 
			frequency = 932.33; 
		break; //j : A#
		case 76: 
			frequency = 1108.73; 
		break; //l : C#6
		case 59: 
			frequency = 1244.51; 
		break; //; : D#
    }
    var add = true;
    for(var i = 0; i < oscillators.length;i++){
		var element = oscillators[i];
		if(keyCode == element.key){
			add = false;
		}
    }
    if(add){
		o.frequency.value = frequency;
		oscillators.push(createNewOscillator(keyCode, o));
		o.start(0);
    }
};

function keyrelease(e){
    var keyCode = e.keyCode;
    if(keyCode > 47 && keyCode < 91 || keyCode == 219 || keyCode == 221 || keyCode == 188 || keyCode == 190){
		for(var i = 0; i < oscillators.length;i++){
			var element = oscillators[i];
			element.oscillator.stop(0);
			if(keyCode == element.key){
				oscillators.splice(i, 1)
			}
		}
    }
};
