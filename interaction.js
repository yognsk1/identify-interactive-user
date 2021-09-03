const INTERACTION = {
      durationSec: 5,
      counterSec: 0,
      intervalObj: null,
      reset: function () {
        this.counterSec = 0;
      },
      start: function () {
        const intervalFun = () => {
          if (this.counterSec >= this.durationSec) {
            clearInterval(this.intervalObj);
            alert(
              `User is inactive for ${this.durationSec} seconds, Please Re-login.`
            );
          } else {
            this.counterSec++;
          }
          console.log(this.counterSec);
        };

        this.intervalObj = setInterval(intervalFun, 1000);
      },
    };

    INTERACTION.start();
    document.addEventListener("mousemove", () => INTERACTION.reset());
    document.addEventListener("keydown", () => INTERACTION.reset());
