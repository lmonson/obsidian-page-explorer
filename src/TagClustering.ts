import jaccard from "jaccard";
import {DataviewPage} from "./DataviewInterfaces";
import {DBScan, DBScanResults} from "./DBScanAdapter";

function uniqify(data:any[]) {
    const s = new Set(data);
    return [...s];
}

function remove( src:any[], remove:any[]) {
    return src.filter( item => !remove.contains(item));
}


function intersect( arrays:any[][] ){
    let result = arrays.reduce( (a,b) => a.filter( c=>b.includes(c)) );
    return uniqify(result);
}

function commonTags( pages:DataviewPage[], tagsToIgnore:string[] ) {
    let tagsForPages = pages.map( page => page.file.etags );
    let commonTags = uniqify( intersect( tagsForPages ) );
    let trimmedCommonTags = remove( commonTags, tagsToIgnore );
    return trimmedCommonTags;
}

export type PageCluster = {
    tags: string[],
    pages: DataviewPage[]
};

export function clusterByTags(pages: DataviewPage[], epsilon: number, tagsToIgnore: string[]) :PageCluster[] {
    tagsToIgnore = uniqify(tagsToIgnore);

    /**
     * Computes the "distance" between two [[ObsidianPage]] instances, using
     * jaccard distance between the tags of those pages as the distance metric.
     *
     * NOTE: This function removes from consideration all tags in the "ignoredTagSet"
     *
     * @param page1 - a page
     * @param page2 - another page
     */
    function jaccardTagDistance(page1: DataviewPage, page2: DataviewPage) {

        let page1Tags = remove( uniqify( page1.file.etags), tagsToIgnore );
        let page2Tags = remove( uniqify( page2.file.etags), tagsToIgnore );
        return jaccard.distance(page1Tags, page2Tags);
    }

    let _clustering = DBScan(pages, epsilon, jaccardTagDistance);

    let clustering =  _clustering.clusters.map(  pages => {
       return {
           tags: commonTags( pages, tagsToIgnore),
           pages: pages,
           links: pages.map( page => page.file.link)
       }
    });

    return clustering;
}

