class Timer {
    constructor(timer) {
      this.timer = timer;
      let timeClick = true;
      this.timer.addEventListener('click', () => this.timeClick = !this.timeClick);
    }
  
    render() {
      this.timer.innerHTML = this.getTime();
    }
  
  
    getTime() {
      const timeShow = new Date();
      const fullFormat = timeShow.toLocaleTimeString();
      const shortFormat = timeShow.toLocaleTimeString([], {
        timeStyle: 'short'
  
      })
      return this.timeClick ? shortFormat : fullFormat
    }
  }
  
  let timer = document.getElementById("demo-full-format");
  let timers = new Timer(timer)
  setInterval(() => timers.render(), 250)