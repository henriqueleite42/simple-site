interface ScrollInterface {
  top?: number;
  left?: number;
  smooth?: boolean;
}

class Scroll {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  private getElement = () => document.getElementById(this.id) as HTMLDivElement;

  public setNewElement = (id: string) => {
    this.id = id;
  };

  private scroll = ({ top, left, smooth }: ScrollInterface) => {
    const container = this.getElement();

    const options: ScrollToOptions = {};

    if (top) options.top = top;
    if (left) options.left = left;
    if (smooth) options.behavior = "smooth";

    container.scrollTo(options);
  };

  public scrollTop = (smooth?: boolean) =>
    this.scroll({
      top: 0,
      smooth
    });

  public scrollLeft = (smooth?: boolean) =>
    this.scroll({
      left: 0,
      smooth
    });

  public scrollBottom = (smooth?: boolean) => {
    const container = this.getElement();

    this.scroll({
      top: container.scrollHeight,
      smooth
    });
  };

  public scrollRight = (smooth?: boolean) => {
    const container = this.getElement();

    this.scroll({
      left: container.scrollWidth,
      smooth
    });
  };
}

export default Scroll;
