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
      expect(tweetShortener("I love Kode with Klossy!! I can't wait to learn more about coding and make awesome projects at the end of the camp. Also, Melanie's Velociraptor noises are the best. ")).toEqual("I love Kode with Klossy!! I can't wait to learn more about coding and make awesome projects at the end of the camp. Also, Melanie's Velocira")
    })
    
    it('keeps the tweet the same length if it is not too long', () => {
      expect(tweetShortener("I love Kode with Klossy!")).toEqual("I love Kode with Klossy!")
    })    
  })
})



