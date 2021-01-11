//const color = [rgbToHsv(hexToRgb('#104099')), rgbToHsv(hexToRgb('#00005b'))]
const color = [rgbToHsv(hexToRgb('#000C66')), rgbToHsv(hexToRgb('#050A30'))]

function hsvToRgb(hsv) {
    let {h,s,v} = hsv
    var r, g, b;
    var i;
    var f, p, q, t;
     
    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
     
    if(s === 0) {
        // Achromatic (grey)
        r = g = b = v;
        return [
            Math.round(r * 255), 
            Math.round(g * 255), 
            Math.round(b * 255)
        ];
    }
     
    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
     
    switch(i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
     
        case 1:
            r = q;
            g = v;
            b = p;
            break;
     
        case 2:
            r = p;
            g = v;
            b = t;
            break;
     
        case 3:
            r = p;
            g = q;
            b = v;
            break;
     
        case 4:
            r = t;
            g = p;
            b = v;
            break;
     
        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
     
    return {
        r:Math.round(r * 255), 
        g:Math.round(g * 255), 
        b:Math.round(b * 255)
    }
}

function rgbToHsv(rgb) {
    const {r,g,b} = rgb
	var h;
	var s;
	var v;
     
	var maxColor = Math.max(r, g, b);
	var minColor = Math.min(r, g, b);
	var delta = maxColor - minColor;
    	
	// Calculate hue
	// To simplify the formula, we use 0-6 range.
	if(delta === 0) {
		h = 0;
	}
	else if(r === maxColor) {
		h = (6 + (g - b) / delta) % 6;
	}
	else if(g === maxColor) {
		h = 2 + (b - r) / delta;
	}
	else if(b === maxColor) {
		h = 4 + (r - g) / delta;
	}
	else {
		h = 0;
	}
	// Then adjust the range to be 0-1
	h = h/6;
	
	// Calculate saturation
	if(maxColor !== 0) {
		s = delta / maxColor;
	}
	else {
		s = 0;
	}
	
	// Calculate value
	v = maxColor / 255;
	
	return { h: h*360, s: s, v: v };
};

function hexToRgb(color) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function lerpColor(amount, C1, C2) { 
    let newColor = {h:0, s:0, v:0}
    newColor.h = (amount * C2.h + (1-amount) *C1.h)

    newColor.s = (amount * C2.s + (1-amount) *C1.s)
    newColor.v = (amount * C2.v + (1-amount) *C1.v)
    return hsvToRgb(newColor)
}

export function lerpHex(mu) {
    return lerpColor(mu, color[1], color[0])
    
}



export default lerpHex;