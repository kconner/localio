/**
* METAL GEAR GEO 2
* http://rgbk.org/mg2
* 2010 Wray Bowling
*/

var localio = localio || {};

var defaultData = {
	locales : {
		home:{
			 name:"Home"
			,description:"Ah... Home, where most days are spent. Almost all my stuff is here, too."
		}
		,front_yard:{
			 name:"Front Yard"
			,description:"The front yard is nice. There's a little patch of grass at the top of the hill that's always yellow from where someone once spilled fertilizer."
		}
		,back_yard:{
			 name:"Back Yard"
			,description:"The back yard isn't that interesting. There's a door to access the basement, though."
		}
		,gas_station:{
			 name:"Gas Station"
			,description:"Sometimes we ride bikes down here to pick up sodas, and whatnot."
		}
		,creek:{
			 name:"Creek"
			,description:"A pretty wimpy creek. Sometimes it stinks like there's sewage in it. There aren't any fish in it, but we like to pretend there are."
		}
		,tree_house:{
			 name:"Tree House"
			,description:"Michael's tree house. His dad built it a long time ago. Really, it's the secret entrance to the bomb shelter."
		}
		,dirt_hill:{
			 name:"Dirt Hill"
			,description:"The dirt hill is the starting place for almost every bike race. We have to set standards after all."
		}
	}
};


var exampleData = {
	//okay i am at this part in the story
	//okay i am at this place currently
	currentLocation:{
		"type":"Point",
		"coordinates": [100.0, 0.0]
	}
};