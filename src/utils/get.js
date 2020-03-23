import downloadGit from 'download-git-repo';

export const downloadLocal = async (projectName) => {
    let api = "cleanRank/sool-template";
    return new Promise((resolve, reject) => {
        downloadGit(api, projectName, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}