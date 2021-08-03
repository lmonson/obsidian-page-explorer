/**
 * A bit of a hack until I can write a proper typescript typing file for dbscan module
 */
import _dbscan from "@cdxoo/dbscan" ;

export type DBScanResults = {
    clusters: any[][],
    noise: any[]
}


export function DBScan( dataset:any[], epsilon:number, distanceFunction:any) : DBScanResults {
    function indexArray2DatasetArray(indices: number[]) {
        return indices.map(index => dataset[index]);
    }

    /**
     * _dbscan returns an array of objects that looks like this:
     * {
     *     clusters: Array<Array<number>>,
     *     noise: Array<number>
     * }
     * where the numbers are indices into the dataset that was passed into _dbscan
     */
    // @ts-ignore
    let rawResults = _dbscan( {
        dataset:dataset,
        epsilon:epsilon,
        distanceFunction:distanceFunction
    });

    let results = {
        clusters: rawResults.clusters.map( (cluster: number[]) => { return indexArray2DatasetArray(cluster);} ),
        noise: indexArray2DatasetArray( rawResults.noise)
    }

    return results;

}
