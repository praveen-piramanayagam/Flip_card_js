<!-- Flip and Find Game -->

<!-- Rules -->
-- Welcome! to the flip and find game here we go with the rules to play.
-- There will be hidden 6 pairs of identical cards you have to find them.
-- Click any of the cards to flip and show its front side and check another card for it's pair.
-- If you want to restart somewhere else no problem we have restart button.
-- Once you found 6 pairs you won the game !!!

<!-- Code Explaination -->
-- Initially created div structure with image via DOM manipulation.
-- Loaded pairs of image in an array.
-- And sorted the pairs in random manner to avoid sorting in same place after reloading.
-- After player clicks two images checking is both are same image if so you'll get warning message.
-- If both images are same it is checked by using image data-id and added to the array of images.
-- If both images are same images are same the white Background is changed to black indicating it is already paired.
-- If it is black background flipping again is not allowed and a congrats message will be displayed.
-- If the both cards are not identical image is flipped to white again.
