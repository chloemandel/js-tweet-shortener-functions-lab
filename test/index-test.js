describe('Tweet Functions Lab', () => {
  describe("countChars", () => {
    it("given message = 'Watching Scandal'", () => {
      expect(countChars("Watching Scandal")).toEqual(16)
    })
  })
  
  
  describe("addHashtag", () => {
    it("given message = 'At the Gym'", () => {
          expect(addHashtag("At the Gym!")).toEqual("At the Gym! #yolo")
    })
  })
  
  describe("excitedTweet", () => {
    it("upcases a user's string and adds three exclamation points", () => {
          expect(excitedTweet("what a beautiful day")).toEqual("WHAT A BEAUTIFUL DAY!!!")
    })
  })
  
  describe('tweetShortener', () => {
    it('takes a tweet and shortens if it is too long', () => {
      expect(tweetShortener()).toEqual()
    })
    
    it('keeps the tweet the same length if it is not too long', () => {
      expect(tweetShortener()).toEqual()
    })    
  })
})



