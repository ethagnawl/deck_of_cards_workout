// Generated by CoffeeScript 1.3.3
(function() {
  var Card, Deck, Game, deck_of_cards_workout, members, suits;

  deck_of_cards_workout = {};

  Card = (function() {

    function Card(suit, member, number, exercise) {
      this.suit = suit;
      this.member = member;
      this.number = number;
      this.exercise = exercise;
    }

    return Card;

  })();

  Deck = (function() {

    function Deck(cards) {
      this.cards = cards;
    }

    Deck.prototype.shuffle = function() {
      var s;
      s = [];
      while (this.cards.length) {
        s.push(this.cards.splice(Math.random() * this.cards.length, 1)[0]);
      }
      this.cards = s;
      return this;
    };

    return Deck;

  })();

  Game = (function() {

    function Game(deck) {
      this.deck = deck;
    }

    Game.prototype.cards_played = 0;

    Game.prototype.display_status_message = function() {
      return alert("You made it through " + this.cards_played + " card(s).\n\n    " + (this.cards_played === 52 ? 'Nice work!' : 'Better luck next time!'));
    };

    Game.prototype.play = function() {
      var card, i, _i, _len, _ref;
      _ref = this.deck;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        card = _ref[i];
        if (confirm("" + card.member + " of " + card.suit + "\n\nDo " + card.number + " " + card.exercise + "!\n\nOnly " + (52 - ++this.cards_played) + " more to go!")) {
          continue;
        } else {
          break;
        }
      }
      return this.display_status_message();
    };

    return Game;

  })();

  suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

  members = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

  deck_of_cards_workout.init = function(_exercises) {
    var deck, exercise, exercises, i, member, suit, _deck, _i, _j, _k, _len, _len1, _len2;
    if (_exercises == null) {
      _exercises = ['Crunches', 'Pull-ups', 'Push-ups', 'Squats'];
    }
    exercises = {};
    for (i = _i = 0, _len = _exercises.length; _i < _len; i = ++_i) {
      exercise = _exercises[i];
      exercises[suits[i]] = exercise;
    }
    _deck = [];
    for (_j = 0, _len1 = suits.length; _j < _len1; _j++) {
      suit = suits[_j];
      for (i = _k = 0, _len2 = members.length; _k < _len2; i = ++_k) {
        member = members[i];
        _deck.push(new Card(suit, member, (i += 2), exercises[suit]));
      }
    }
    deck = new Deck(_deck).shuffle().cards;
    return new Game(deck).play();
  };

  this.deck_of_cards_workout = deck_of_cards_workout;

}).call(this);
