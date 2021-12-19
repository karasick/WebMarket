class ImageService {
    getName(fullName) {
        return fullName.split('.')[0];
    }

    getNameAndSlice(fullName) {
        let imageName = fullName.split('.')[0];
        if(imageName.length > 200) {
            return imageName.slice(0, 200)
        }
        return imageName
    }

    getExtension(fullName) {
        return fullName.split('.').pop();
    }
}

module.exports = new ImageService()