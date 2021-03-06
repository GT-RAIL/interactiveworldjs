/**
 * @author Russell Toris - russell.toris@gmail.com
 */

var INTERACTIVEWORLD = INTERACTIVEWORLD || {
  REVISION : '0.5.0-SNAPSHOT'
};

INTERACTIVEWORLD.TASK_NONE = -1;
INTERACTIVEWORLD.TASK_TABLE_SETTING = 0;
INTERACTIVEWORLD.TASK_MAGAZINE_PLACEMENT = 1;
INTERACTIVEWORLD.TASK_DIRTY_DISHES = 2;
INTERACTIVEWORLD.TASK_PUT_AWAY_GENERAL = 3;

INTERACTIVEWORLD.DOT_RADIUS = 0.04;

INTERACTIVEWORLD.BRICKS_TEXTURE = 'resources/textures/bricks.jpg';
INTERACTIVEWORLD.CARPET_GREY_TEXTURE = 'resources/textures/carpet-grey.jpg';
INTERACTIVEWORLD.CARPET_TAN_TEXTURE = 'resources/textures/carpet-tan.jpg';
INTERACTIVEWORLD.GRASS_TEXTURE = 'resources/textures/grass.jpg';
INTERACTIVEWORLD.HARDWOOD_DARK_TEXTURE = 'resources/textures/hardwood-dark.jpg';
INTERACTIVEWORLD.HARDWOOD_LIGHT_TEXTURE = 'resources/textures/hardwood-light.jpg';
INTERACTIVEWORLD.PAINTED_WALL_BLUE_TEXTURE = 'resources/textures/painted-wall-blue.jpg';
INTERACTIVEWORLD.PAINTED_WALL_RED_TEXTURE = 'resources/textures/painted-wall-red.jpg';
INTERACTIVEWORLD.RUG_TEXTURE = 'resources/textures/rug.jpg';
INTERACTIVEWORLD.SKY_TEXTURE = 'resources/textures/sky.jpg';
INTERACTIVEWORLD.TILE_FLOOR_TEXTURE = 'resources/textures/tile-floor.jpg';
INTERACTIVEWORLD.TILE_WALL_TEXTURE = 'resources/textures/tile-wall.jpg';
INTERACTIVEWORLD.WALLPAPER_LIGHT_TEXTURE = 'resources/textures/wallpaper-light.jpg';

INTERACTIVEWORLD.NEXT_ARROW = 'resources/images/next.png';
INTERACTIVEWORLD.PREVIOUS_ARROW = 'resources/images/previous.png';

INTERACTIVEWORLD.Z_INDEX = 0.005;

INTERACTIVEWORLD.NORTH_WALL = 0;
INTERACTIVEWORLD.EAST_WALL = 1;
INTERACTIVEWORLD.SOUTH_WALL = 2;
INTERACTIVEWORLD.WEST_WALL = 3;

INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE = 0;
INTERACTIVEWORLD.POSITIVE_DOOR_SIDE = 1;

INTERACTIVEWORLD.INTERACTION_SURFACE_THICKNESS = 0.005;

INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_WIDTH = 3;
INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_HEIGHT = 3;
INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_FLOOR_TEXTURE = INTERACTIVEWORLD.WOOD_MAHOGANY_POLISHED_TEXTURE;

INTERACTIVEWORLD.WORLD_WIDTH = 20;
INTERACTIVEWORLD.WORLD_HEIGHT = 20;
INTERACTIVEWORLD.WORLD_FLOOR_TEXTURE = INTERACTIVEWORLD.GRASS_TEXTURE;

INTERACTIVEWORLD.WALL_WIDTH = 0.05;
INTERACTIVEWORLD.WALL_HEIGHT = 0.75;
INTERACTIVEWORLD.DOOR_WIDTH = 0.8;

INTERACTIVEWORLD.HALLWAY_WIDTH = 1;

INTERACTIVEWORLD.ROOM_WIDTH = 4.9;
INTERACTIVEWORLD.ROOM_HEIGHT = 4;

INTERACTIVEWORLD.HOUSE_WIDTH = (INTERACTIVEWORLD.ROOM_WIDTH * 2)
    + INTERACTIVEWORLD.HALLWAY_WIDTH;
INTERACTIVEWORLD.HOUSE_HEIGHT = (INTERACTIVEWORLD.ROOM_HEIGHT * 2)
    + INTERACTIVEWORLD.HALLWAY_WIDTH;
INTERACTIVEWORLD.HOUSE_WALL_TEXTURE = INTERACTIVEWORLD.BRICKS_TEXTURE;
INTERACTIVEWORLD.HOUSE_FLOOR_TEXTURE = INTERACTIVEWORLD.HARDWOOD_LIGHT_TEXTURE;

INTERACTIVEWORLD.BEDROOM_WALL_TEXTURE = INTERACTIVEWORLD.PAINTED_WALL_BLUE_TEXTURE;
INTERACTIVEWORLD.BEDROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.CARPET_GREY_TEXTURE;

INTERACTIVEWORLD.KITCHEN_WALL_TEXTURE = INTERACTIVEWORLD.TILE_WALL_TEXTURE;
INTERACTIVEWORLD.KITCHEN_FLOOR_TEXTURE = INTERACTIVEWORLD.TILE_FLOOR_TEXTURE;

INTERACTIVEWORLD.DINING_ROOM_WALL_TEXTURE = INTERACTIVEWORLD.WALLPAPER_LIGHT_TEXTURE;
INTERACTIVEWORLD.DINING_ROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.HARDWOOD_DARK_TEXTURE;

INTERACTIVEWORLD.LIVING_ROOM_WALL_TEXTURE = INTERACTIVEWORLD.PAINTED_WALL_RED_TEXTURE;
INTERACTIVEWORLD.LIVING_ROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.CARPET_TAN_TEXTURE;

INTERACTIVEWORLD.BED_MODEL = 'rail_collada_models/meshes/bed.min.dae';
INTERACTIVEWORLD.DRESSER_MODEL = 'rail_collada_models/meshes/dresser.min.dae';
INTERACTIVEWORLD.NIGHTSTAND_MODEL = 'rail_collada_models/meshes/nightstand.min.dae';
INTERACTIVEWORLD.DINING_TABLE_MODEL = 'rail_collada_models/meshes/dining-table.min.dae';
INTERACTIVEWORLD.SINK_MODEL = 'rail_collada_models/meshes/sink.min.dae';
INTERACTIVEWORLD.CABINET_MODEL = 'rail_collada_models/meshes/cabinet.min.dae';
INTERACTIVEWORLD.REFRIGERATOR_MODEL = 'rail_collada_models/meshes/refrigerator.min.dae';
INTERACTIVEWORLD.OVEN_MODEL = 'rail_collada_models/meshes/oven.min.dae';
INTERACTIVEWORLD.COUNTER_MODEL = 'rail_collada_models/meshes/counter.min.dae';
INTERACTIVEWORLD.COUCH_MODEL = 'rail_collada_models/meshes/large-couch.min.dae';
INTERACTIVEWORLD.TV_MODEL = 'rail_collada_models/meshes/tv-set.min.dae';
INTERACTIVEWORLD.COFFEE_TABLE_MODEL = 'rail_collada_models/meshes/coffee-table.min.dae';
INTERACTIVEWORLD.PLATE_MODEL = 'rail_collada_models/meshes/plate.min.dae';
INTERACTIVEWORLD.SPOON_MODEL = 'rail_collada_models/meshes/spoon.min.dae';
INTERACTIVEWORLD.MAGAZINES_MODEL = 'rail_collada_models/meshes/magazines.min.dae';
INTERACTIVEWORLD.CUP_MODEL = 'rail_collada_models/meshes/cup.min.dae';
INTERACTIVEWORLD.FORK_MODEL = 'rail_collada_models/meshes/fork.min.dae';

INTERACTIVEWORLD.CSS = 'resources/css/interactiveworld.min.css';

INTERACTIVEWORLD.DIV_ID = 'interactive-world';

INTERACTIVEWORLD.PATH = 'http://resources.robotwebtools.org/';
INTERACTIVEWORLD.TEXTURE_PATH = '/';
INTERACTIVEWORLD.IMAGE_PATH = '/';
INTERACTIVEWORLD.CSS_PATH = '/';

INTERACTIVEWORLD.init = function(options) {
  options = options || {};
  var task = options.task;

  // load CSS
  var link = document.createElement('link');
  link.href = INTERACTIVEWORLD.CSS_PATH + INTERACTIVEWORLD.CSS;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.media = 'screen,print';
  document.getElementsByTagName('head')[0].appendChild(link);

  // create the main container we need
  var main = document.createElement('div');
  main.id = INTERACTIVEWORLD.DIV_ID;
  document.getElementsByTagName('body')[0].appendChild(main);

  // add the viewer
  var viewer = new INTERACTIVEWORLD.Viewer({
    divID : INTERACTIVEWORLD.DIV_ID,
    antialias : true,
    task : task
  });

  return viewer;
};

INTERACTIVEWORLD.createObjectByName = function(name) {
  switch (name) {
    case 'Bed':
      return new INTERACTIVEWORLD.Bed();
    case 'Cabinet':
      return new INTERACTIVEWORLD.Cabinet();
    case 'Coffee Table':
      return new INTERACTIVEWORLD.CoffeeTable();
    case 'Couch':
      return new INTERACTIVEWORLD.Couch();
    case 'Counter':
      return new INTERACTIVEWORLD.Counter();
    case 'Cup':
      return new INTERACTIVEWORLD.Cup();
    case 'Dining Table with Chairs':
      return new INTERACTIVEWORLD.DiningTable();
    case 'Dresser':
      return new INTERACTIVEWORLD.Dresser();
    case 'Fork':
      return new INTERACTIVEWORLD.Fork();
    case 'Magazines':
      return new INTERACTIVEWORLD.Magazines();
    case 'Nightstand':
      return new INTERACTIVEWORLD.Nightstand();
    case 'Oven':
      return new INTERACTIVEWORLD.Oven();
    case 'Plate':
      return new INTERACTIVEWORLD.Plate();
    case 'Refrigerator':
      return new INTERACTIVEWORLD.Refrigerator();
    case 'Sink Unit':
      return new INTERACTIVEWORLD.Sink();
    case 'Spoon':
      return new INTERACTIVEWORLD.Spoon();
    case 'TV':
      return new INTERACTIVEWORLD.TV();
    default:
      var r = INTERACTIVEWORLD.DOT_RADIUS;
      return new THREE.Mesh(new THREE.SphereGeometry(r, r / 10000, r / 10000), new THREE.MeshNormalMaterial());
  }
};
