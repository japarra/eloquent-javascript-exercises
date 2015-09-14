/*
 * Write a loop that makes seven calls to console.log to output the following triangle:
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
**/

var line = '';

for(var i = 1; i <= 7; i++) {
    line += "#";
    console.log(line);
}