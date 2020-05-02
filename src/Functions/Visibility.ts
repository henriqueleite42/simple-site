class Visibility {
  private id: string;
  private smooth: boolean;

  constructor(id: string, smooth?: boolean) {
    this.id = id;
    this.smooth = smooth || false;
  }

  public setNewElement = (id: string) => {
    this.id = id;
  };

  public isHidden = () => {
    const element = this.getElement();

    if (!element) return false;

    if (!this.smooth) {
      return element.style.display === "none";
    } else {
      return element.style.maxWidth === "0px";
    }
  };

  private getElement = () => document.getElementById(this.id) as HTMLDivElement;

  public hide = () => {
    const element = this.getElement();

    if (!this.smooth) {
      element.style.display = "none";
    } else {
      element.style.minWidth = "0";
      element.style.width = "0";
      element.style.maxWidth = "0";
    }
  };

  public show = () => {
    const element = this.getElement();

    if (!this.smooth) {
      element.style.display = "flex";
    } else {
      element.removeAttribute("style");
    }
  };

  public invert = (preference?: "hide" | "show") => {
    const element = this.getElement();

    console.log(this.isHidden());

    if (!this.smooth) {
      switch (element.style.display) {
        case "flex":
        case "block":
          this.hide();
          break;
        case "none":
          this.show();
          break;
        default:
          if (preference === "hide") this.hide();
          else this.show();
          break;
      }
    } else {
      if (this.isHidden()) this.show();
      else this.hide();
    }
  };
}

export default Visibility;
