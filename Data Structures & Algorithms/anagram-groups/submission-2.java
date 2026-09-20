class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // create a map with array<character> characters : array<string> words
        // for each word, create an array with its ordered characters
        // then if map contains its array as key, add that word as value to that key

        // return array of values of map

        Map<String, List<String>> wordChars = new HashMap<>();

        for(String word: strs){

            char[] charArray = word.toCharArray();
            Arrays.sort(charArray);
            String key = String.valueOf(charArray);


            if(wordChars.containsKey(key)){
                List<String> words = wordChars.get(key);
                words.add(word);
            }else{
                ArrayList<String> words = new ArrayList<>();
                words.add(word);
                wordChars.put(key, words);
            }
        }


        return new ArrayList<>(wordChars.values());
    }
}
