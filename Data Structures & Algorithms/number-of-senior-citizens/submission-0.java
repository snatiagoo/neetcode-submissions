class Solution {
    public int countSeniors(String[] details) {
        //11 and 12
        return (int) Stream.of(details).filter(d -> Integer.parseInt(d.substring(11, 13)) > 60)
        .count(); 
    }
}