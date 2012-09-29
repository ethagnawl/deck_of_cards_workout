deck_of_cards_workout = {}

class Card
    constructor: (@suit, @member, @number, @exercise) ->

class Deck
    constructor: (@cards) ->
    shuffle: ->
        s = []
        while (@cards.length)
            s.push(@cards.splice(Math.random() * @cards.length, 1)[0])

        @cards = s
        @

class Game
    constructor: (@deck) ->
    cards_played: 0
    display_status_message: ->
        alert """
        You made it through #{@cards_played} card(s).

            #{if @cards_played is 52 then 'Nice work!' else 'Better luck next time!'}
        """
    play: ->
        for card, i in @deck
            if confirm """
                #{card.member} of #{card.suit}

                Do #{card.number} #{card.exercise}!

                Only #{52 - ++@cards_played} more to go!
            """
                continue
            else
                break
        @display_status_message()

suits = [
    'Clubs'
    'Diamonds'
    'Hearts'
    'Spades'
]

members = [
    'Two'
    'Three'
    'Four'
    'Five'
    'Six'
    'Seven'
    'Eight'
    'Nine'
    'Ten'
    'Jack'
    'Queen'
    'King'
    'Ace'
]

_exercises = [
    'Crunches'
    'Pull-ups'
    'Push-ups'
    'Squats'
]

deck_of_cards_workout.init = ->

    exercises = {}
    for exercise, i in _exercises
        exercises[suits[i]] = exercise

    _deck = []
    for suit in suits
        for member, i in members
            _deck.push new Card(suit, member, (i += 2), exercises[suit])

    deck = new Deck(_deck).shuffle().cards
    new Game(deck).play()

@deck_of_cards_workout = deck_of_cards_workout
