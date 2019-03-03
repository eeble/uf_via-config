import { SatisfactionMenu } from './satisfaction-menu';

export const LAYOUT_SATISFACTION75 = `[{c:"#09b084",a:7},"0",{x:0.5,c:"#cccccc"},"1","2","3","4",{x:0.25,c:"#09b084"},"5","6","7","8",{x:0.25,c:"#cccccc"},"9","10","11","12"],
[{y:0.25,c:"#09b084"},"13",{c:"#cccccc"},"14","15","16","17","18","19","20","21","22","23","24","25",{c:"#09b084",w:2},"26",{x:0.5},"27"],
[{w:1.5},"28",{c:"#cccccc"},"29","30","31","32","33","34","35","36","37","38","39","40",{c:"#09b084",w:1.5},"41",{x:0.5},"42"],
[{w:1.75},"43",{c:"#cccccc"},"44","45","46","47","48","49","50","51","52","53","54",{c:"#09b084",w:2.25},"55",{x:0.5},"56"],
[{w:2.25},"57",{c:"#cccccc"},"58","59","60","61","62","63","64","65","66","67",{c:"#09b084",w:1.75},"68",{x:1.5},"70"],
[{y:-0.75,x:14.25},"69"],
[{y:-0.25,w:1.25},"71",{w:1.25},"72",{w:1.25},"73",{c:"#cccccc",w:6.25},"74",{c:"#09b084"},"75","76","77"],
[{y:-0.75,x:13.25},"78","79","80"]`;

export const MATRIX_SATISFACTION75 = `
#define LAYOUT( \
	K000,       K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, K013,             \
	K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113,       K115, \
	K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213,       K215, \
	K300, K301, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312,             K315, \
	K400, K401, K402, K403, K404, K405, K406, K407, K408, K409, K410, K411,       K413,       K415, \
	K500, K501, K502,             K505,                   K509, K510, K511, K512, K513,       K515  \
) { \
	{ K000,  KC_NO, K002,  K003,  K004,  K005,  K006,  K007,  K008,  K009,  K010,  K011,  K012,  K013,  KC_NO,  KC_NO }, \
	{ K100,  K101,  K102,  K103,  K104,  K105,  K106,  K107,  K108,  K109,  K110,  K111,  K112,  K113,  KC_NO,  K115 }, \
	{ K200,  K201,  K202,  K203,  K204,  K205,  K206,  K207,  K208,  K209,  K210,  K211,  K212,  K213,  KC_NO,  K215 }, \
	{ K300,  K301,  K302,  K303,  K304,  K305,  K306,  K307,  K308,  K309,  K310,  K311,  K312,  KC_NO, KC_NO,  K315 }, \
	{ K400,  K401,  K402,  K403,  K404,  K405,  K406,  K407,  K408,  K409,  K410,  K411,  KC_NO, K413,  KC_NO,  K415 }, \
	{ K500,  K501,  K502,  KC_NO, KC_NO, K505,  KC_NO, KC_NO, KC_NO, K509,  K510,  K511,  K512,  K513,  KC_NO,  K515 } \
}
`;

const CONFIG = {
  name: 'Satisfaction75',
  layout: LAYOUT_SATISFACTION75,
  matrixLayout: MATRIX_SATISFACTION75,
  lights: false,
  overrideMatrixIndexing: true,
  customConfig: {
    custom: SatisfactionMenu
  },
  vendorProductId: 0xca0457f5,
};

export default CONFIG;