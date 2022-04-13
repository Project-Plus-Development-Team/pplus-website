export class UnavailableImageError extends Error {
  public constructor(imageName: string, imageGroupName: string) {
    super(
      `Image name "${imageName}" is not in the available images of the group "${imageGroupName}".\n`
      + `Maybe you forgot to run 'npm run generate-imgs'.`
    );
  }
}
