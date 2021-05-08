/**
 * @file mofron-comp-heatmap/index.js
 * @brief heatmapjs wrapper for moforn
 * @license MIT
 */

const HeatMap_js = require("heatmap.js");

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Heatmap");
            
	    /* init config */
            this.confmng().add("heatmap", { type: "object" });

            if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            let wrap = new mofron.class.Dom("div",this);
	    wrap.style({ "background" : "rgba(0,0,0,0.3)" });
            
            let hmap = new mofron.class.Dom("div",this);
	    hmap.style({
	        "height":"100%",
		"width" : "100%"
            });
	    this.m_hmap = hmap;

            wrap.child(hmap);
            
	    this.rootDom(wrap);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set heatmap dom
     * 
     * @type private
     */
    afterRender () {
        try {
            super.afterRender();
            this.heatmap(HeatMap_js.create({
                container: this.m_hmap.getRawDom()
            }));
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * heatmap object getter
     * 
     * @type function
     */
    heatmap (prm) {
        try {
            return this.confmng("heatmap", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
