$(document).ready(function(){
  
  function getQuote(){
                     
    
    var quotes = ["No, Well, Hi Mary Jean. See y’all later. Go ahead please.", "First I would like to praise my Lord Jesus Christ.  I ask for forgiveness to the Thomas Family for my past choices I made.  Carol did not deserve for what I’ve done.  I’ve asked God to forgive me.  Please find it in your hearts to forgive me.  I’m sorry it has been bothering me for a long time.  So I now pray and I will keep you all in my prayers.  I hope you find it in your heart to forgive me.  I’m sorry. To my supporters Daniel, brother Charlie, Steve and all who stood by me, thank you.  By no means am I happy for what I’ve done.  I have asked the Lord to forgive me.  Please tell everyone I’m certain I left off some names.  Tell my kids I’m sorry for being a disappointment.  Thank you. God bless.  I’m ready warden.", "I’d like to take a moment to say I’m sorry.  No amount of words could ever undo what I’ve done.  To the family of my victims, I wish I could undo that past.  It is what it is.  God bless all of you, I will die with a clear conscience.  I made my peace. There is no others.  I would like to wish a Happy Birthday to Barbara Carrol, today is her birthday.  I would like to especially thank those that have helped me, you know who you are.  God bless everybody until we meet again.  I’m ready warden.", "This is my statement:  My final words.  First, I want to thank my family for believing in me and being there with me till the end.  I love you all very much!  And I know that you love me too!  Life does go on. Next, I would like to also thank my attorney’s Maurie Levin, Alicia Amezcua Rodriguez and Sandra Babcock for all their hard work they have done to help me out. I am so thankful.  I would also like to thank the Mexican Consul for all their help too, and every government official that was trying to help me out too.  Thank you Maricela Luna and Julia Thimm for being such good friends!  Now!  I will not and cannot apologize for someone else’s crime, but, I will be back for justice!  You can count on that! Thank you. With Respect Ruben Cardenas", "I just want to let everyone in here to know I love you so much. I’ve hurt a lot of people and a lot of people have hurt me. I love y'all so much. Life don’t end here it goes on forever. I’ve had to learn lessons in life the hard way. One day there won’t be a need to hurt people. I love y'all so much. I’m ready to go but I’ll be back. Nighty night everybody, nighty night everybody. I’m done warden.", "First and foremost I'd like to say, \"Justice has never advanced by taking a life\" by Coretta Scott King. Lastly, to my wife and to my kids, I love y'all forever and always. That's it.", "Yes, I do, Grace Kehler is that you? I have given Warden Jones a written statement that will explain a lot more. I hope this will bring you closure and answers to some questions. I hope this will bring you peace and I'm sorry for all the pain and suffering. I'm sorry it went on for a terribly long time. I'm sorry to you especially Grace Kehler. To the Kehler, Johnson and Crain family, I pray that you won't hate Jesus, the letter will explain more. I'm sorry. I'm sorry. I hope that my death will bring you peace and closure. I pray that maybe someday will bring you peace. I hope that you could forgive me, but if you don't I understand. I don't think I could forgive anyone who would of killed my children. I'm sorry for your suffering you've had for a long time. I'm sorry, I'm sorry. I love you Lord Jesus, Lord Jesus.", "Yes sir, I would first like to say to the Sanchez family how sorry I am.  Words cannot begin to express how sorry  I am and the hurt that I have caused you and your family.  May this bring you peace and forgiveness. I am sorry. To my family, thank you for all your love and support.  I am at peace.  Jesus Christ is Lord.  I love you all.  Thank you Warden that is it."];
    var author = ["- John David Battaglia #999412", "- William Rayford #999371", "- Anthony Allen Shore", "- Ruben Ramirez Cardenas #999275", "- Robert Lynn Pruett #999411", "- Taichin Preyor", "- James Bigby #997", "- Rolando Ruiz"];
    var unit = ["TDCJ", "TDCJ", "TDCJ", "TDCJ", "TDCJ", "TDCJ", "TDCJ", "TDCJ"];
    var doe = ["February 1, 2018", "January 30, 2018", "Januray 18, 2018", "November 8, 2017", "October 12, 2017", "July 27, 2017", "March 14, 2017", "March 7, 2017"]
    
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];
    var randomUnit = unit[randomNum];
    var randomDoe = doe[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
    $(".unit").text(randomUnit);
    $(".doe").text(randomDoe)
    
                     }
  $(".btn").on('touchend mouseup', function(){
    getQuote();
  });
  
});