/**
* jPList - jQuery Data Grid Controls ##VERSION## - http://jplist.com 
* Copyright 2014 Miriam Zusin. All rights reserved.
* For non-commercial, personal, or open source projects and applications, you may use jPList for free  http://www.binpress.com/license/read/id/2749/app/2085
* If your project generates any type of income, e.g. sells products, ads, services or just represents a commercial company, you should get a commercial license at http://www.binpress.com
*/
(function(){
	'use strict';	
	
	/**
	* date filter - filter dataview by date in the given jquery path
	* @param {number} year
	* @param {number} month
	* @param {number} day
	* @param {jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel} path - path object
	* @param {Array.<jQuery.fn.jplist.domain.dom.models.DataItemModel>} dataview - collection dataview
	* @param {string} format - datetime format
	* @return {Array.<jQuery.fn.jplist.domain.dom.models.DataItemModel>}
	*/
	jQuery.fn.jplist.domain.dom.services.FiltersService.dateFilter = function(year, month, day, path, dataview, format){
	
		var dataitem
			,pathitem
			,resultDataview = []
			,pathitemDate;
		
		for(var i=0; i<dataview.length; i++){
		
			//get dataitem
			dataitem = dataview[i];
			
			//find value by path
			pathitem = dataitem.findPathitem(path);
			
			//if path is found
			if(pathitem){
				
				if(!year || !month || !day){
				
					resultDataview.push(dataitem);	
				}
				else{
				
					//get date from pathitem (by its text value)
					pathitemDate = jQuery.fn.jplist.domain.dom.services.SortService.jQuery.fn.jplist.domain.dom.services.HelperService.formatDateTime(pathitem.text, format);
					
					if(pathitemDate && typeof pathitemDate.getFullYear === 'function'){
						
						if((pathitemDate.getFullYear() === year) && (pathitemDate.getMonth() - 1 === month) && (pathitemDate.getDate() === day)){							
							resultDataview.push(dataitem);	
						}
					}
				}
			}
			
		}
		
		return resultDataview;
	};
	
})();	