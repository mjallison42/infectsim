A toy infection simulator. <a href="mjallison42.github.io/infectsim/build/index.html">Try it here</a>

I was looking for a reason to learn a new language.
Dart seemed like a good choice. I've always wanted to 
write a zombie infection simulator, cause, why not? 
During the covid-19 lockdown, it seemed like things aligned.

This is not a proper infection simulator, and even does
things wrong. I've always enjoyed discrete simulators and
this is how I chose to implement this. 

You are the health official for a town and recommend 
various mitigation strategies to attempt to control the
spread of the infection. Like real life, you have no idea
what the parameters of disease actually are. All you have is
reported values, represented on the right hand side. 

Your town has homes, businesses, schools, hospitals, and
public meeting spaces. The maps is for visualization of
infection spread, it doesn't realistically map a proper
town's layout. This simulator makes not attempt to model
other societal aspects such as finance, or civil unrest.

Things todo:
   * business district
      * classes of businesses; restaurant, movie, stores, schools, medical
   * sub-day simulation ("hours")
   * play/pause buttons
   * randomize buttons (random disease)
   * mitigation policies
      * shelter in place
      * vaccination
      * public service (wash hands, don't cough, etc)
   * local government
      * variable compliance with health officer
      * signage show the HO how govt is responding 
   * Entity extensions
      * factor for compliance with rules
      * age for age specific disease
      * go home at end of day
      * goto work during day
      * goto public places (restaurant, movie, etc) in eve
      * "occupation" to determine which business to visit
   
Supporting packages:

modern_charts - simple charting package
https://pub.dev/packages/modern_charts

normal - a normal distribution random number generator
https://pub.dev/packages/normal

control buttons
<a href="https://www.freepik.com/free-photos-vectors/icon">Icon vector created by yurlick - www.freepik.com

Created from templates made available by Stagehand under a BSD-style
[license](https://github.com/dart-lang/stagehand/blob/master/LICENSE).
