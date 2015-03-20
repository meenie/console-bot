import Q from 'q';

export function checkImageExists(src) {
    let deferred = Q.defer(),
        img = new Image();

    img.onload = () => {
        deferred.resolve(true);
    };

    img.onerror = () => {
        deferred.reject('no image');
    };

    img.src = src;

    return deferred.promise;
}
