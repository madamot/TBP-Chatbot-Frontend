class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("button")) {
      return this.actionProvider.handleButtonExamle();
    }

    if (lowerCase.includes("carousel")) {
      return this.actionProvider.handleCarouselExamle();
    }

    if (lowerCase.includes("help")) {
      return this.actionProvider.handleHelp();
    }

    // return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
