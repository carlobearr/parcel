export const getTracker = async(input) => {
    const response = await fetch('/tracking/' + input.trackingNumber, {
        credentials: "include"
    });

    const result = await response.json();

    if (result.tracker === null) {
        return null;
    }
    //re-map status to JSONs
    const newstat = result.tracker.status.map((stat) => {
        return JSON.parse(stat);
    });

    const cleanedResult = result.tracker;
    cleanedResult.status = newstat;

    return cleanedResult;
}