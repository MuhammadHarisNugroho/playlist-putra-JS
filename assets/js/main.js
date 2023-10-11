new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
                  {
            name: "1. What's up, people?!",
            artist: "MAXIMUM THE HORMONE",
            cover: "./assets/img/whats-up-people.jpg",
            source: "./assets/mp3/Whats-up-people.mp3",
            url: "https://www.youtube.com/watch?v=muoWDA6zmsY",
            favorited: false
          },
          {
            name: "2. ChuChu Lovely MuniMuni MuraMura PrinPrin Boron Nururu ReroRero",
            artist: "MAXIMUM THE HORMONE",
            cover: "./assets/img/whats-up-people.jpg",
            source: "./assets/mp3/ChuChu-Lovely-MuniMuni-MuraMura-PrinPrin-Boron-Nururu-ReroRero.mp3",
            url: "https://www.youtube.com/watch?v=MPUCEz-RCg0",
            favorited: false
          },
          {
            name: "3. I Really Want to Stay at Your House",
            artist: "Rosa Walton & Hallie Coggins",
            cover: "./assets/img/i-really-want-to-stay-at-your-home.jpg",
            source: "./assets/mp3/I-REALLY-WANT-TO-STAY-AT-YOUR-HOUSE-Rosa-Walton-Hallie-Coggins.mp3",
            url: "",
            favorited: false
          },
  
          {
            name: "4. Lost Kitten",
            artist: "METRIC",
            cover: "./assets/img/metric.jpg",
            source: "./assets/mp3/METRIC-Lost-Kitten.mp3",
            url: "https://www.youtube.com/watch?v=3Xw-9OE1j-Y",
            favorited: false
          },
  
          {
            name: "5. One Last Kiss",
            artist: "Hikaru Utada",
            cover: "./assets/img/one-last-kiss.jpg",
            source: "./assets/mp3/One-Last-Kiss.mp3",
            url: "https://www.youtube.com/watch?v=0Uhh62MUEic",
            favorited: false
          },
          
          {
            name: "6. A Man Without Love",
            artist: "Engelbert Humperdinck",
            cover: "./assets/img/Without_Love.jpg",
            source: "./assets/mp3/A_Man_Without_Love(256k).mp3",
            url: "https://www.youtube.com/watch?v=S2ujotDMluo",
            favorited: false
          },
          
          {
            name: "7. A Real Hero",
            artist: "College & Electric Youth",
            cover: "./assets/img/A_Real_Hero.jpg",
            source: "./assets/mp3/A_Real_Hero_(256k).mp3",
            url: "https://www.youtube.com/watch?v=-DSVDcw6iW8",
            favorited: false
          },
          
          {
            name: "8. Alive A life",
            artist: "Matsumoto",
            cover: "./assets/img/Alive_A_life.jpg",
            source: "./assets/mp3/Alive_A_life(256k).mp3",
            url: "https://www.youtube.com/watch?v=yJ2cONTUtGw",
            favorited: false
          },
          
          {
            name: "9. All About Us",
            artist: "t.A.T.u",
            cover: "./assets/img/All_About_Us.jpg",
            source: "./assets/mp3/All_About_Us(256k).mp3",
            url: "https://www.youtube.com/watch?v=8mGBaXPlri8",
            favorited: false
          },
          
          {
            name: "10. All The Stars",
            artist: "Kendrik Lamar",
            cover: "./assets/img/All-The-Stars.jpg",
            source: "./assets/mp3/All_The_Stars(256k).mp3",
            url: "https://www.youtube.com/watch?v=JQbjS0_ZfJ0",
            favorited: false
          },
          
          {
            name: "11. All The Things She Said",
            artist: "t.A.T.u",
            cover: "./assets/img/All_The_Things_She_Said.jpg",
            source: "./assets/mp3/All_The_Things_She_Said(256k).mp3",
            url: "https://www.youtube.com/watch?v=8mGBaXPlri8",
            favorited: false
          },
          
          {
            name: "12. Alright(256k)",
            artist: "Sam Fischer, Meghan Trainor",
            cover: "./assets/img/Allright.jpg",
            source: "./assets/mp3/Alright(256k).mp3",
            url: "https://www.youtube.com/watch?v=IjI5UxKFI4Y",
            favorited: false
          },
          
          {
            name: "13. Am I Dreaming",
            artist: "Metro Boomin & A$AP Rocky, Roisee",
            cover: "./assets/img/Am_I_Dreaming.jpg",
            source: "./assets/mp3/Am_I_Dreaming(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "14. Bitch, Don't Kill My Vibe",
            artist: "Kendrick Lamar",
            cover: "./assets/img/Bitch_Dont_Kill_My_Vibe.jpg",
            source: "./assets/mp3/Bitch,_Dont_Kill_My_Vibe(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "15. BrooklynBloodPop!",
            artist: "SyKo",
            cover: "./assets/img/BrooklynBloodPop.jpg",
            source: "./assets/mp3/BrooklynBloodPop!(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "16. By The Time You re Reading This",
            artist: "Drake",
            cover: "./assets/img/By_The_Time_You_re_Reading_This.jpg",
            source: "./assets/mp3/By_The_Time_You_re_Reading_This.mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "17. Calling",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Calling_(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "18. Can't Get Over You",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Can_t_Get_Over_You(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "19. Can't Sleep",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Can_t_Sleep(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "20. Chinese Fairytale",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Chinese_Fairytale(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "21. DNA.",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/DNA.(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "22. Duvet",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Duvet(128k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "23. Dysnaties Dystopia",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Dynasties___Dystopia(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "24. Element",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/ELEMENT.(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "25. Everybody Gose",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/EVERYBODY_GOSE(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "26. Family Ties",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/family_ties(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "27. Flashback",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Flashback(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "28. Gimme Love",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Gimme_Love(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "29. Hawatari Nioku Centi",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/HAWATARI_NIOKU_CENTI(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "30. Inferno",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Inferno(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "31. It Was A Good Day",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/It_Was_A_Good_Day(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "32. Kick Back",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/KICK_BACK(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "33. KOMM_2C_SUSSER_TOD_M-10(128k)",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/KOMM_2C_SUSSER_TOD_M-10(128k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "34. Lady (Here Me Tonight)",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Lady_(Here_Me_Tonight)(128k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "35. Lucky_You_(Feat._Joyner_Lucas)",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Lucky_You_(Feat._Joyner_Lucas)_[Official_Audio](256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "36. m.A.A.d_city",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/m.A.A.d_city(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "37. Messages from the Stars (Sped Up)",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Messages_from_the_Stars_(Sped_Up)(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "38. Meteor",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Meteor(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "39. Misato",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Misato(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "40. YEAH RIGHT",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/YEAH_RIGHT(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "41. Paradise",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Paradise(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "42. Polaris",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Polaris(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "43. Rapp_Snitch_Knishes_(feat._Mr._Fantastik)",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Rapp_Snitch_Knishes_(feat._Mr._Fantastik)(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "44. REALiZE",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/REALiZE(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "45. Run",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Run(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "46. Sanctuary",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Sanctuary(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "47. Strangers",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Strangers(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "48. Tell Me Why",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Tell_Me_Why(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "49. Thank You",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Thank_You(256k).mp3",
            url: "",
            favorited: false
          },
          
          {
            name: "50. Tick Tock",
            artist: "",
            cover: "./assets/img/.jpg",
            source: "./assets/mp3/Tick_Tock(256k).mp3",
            url: "",
            favorited: false
          },
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });
  