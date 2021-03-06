/**
 * @description: 希尔排序 js
 * @param {Array} [6, 5, 4, 3, 2, 1]
 * @return: [1,2,3,4,5,6]
 * 算法先将要排序的一组数按某个增量d（n/2,n为要排序数的个数）分成若干组，
 * 每组中记录的下标相差d.对每组中全部元素进行直接插入排序，然后再用一个较小的增量（d/2）对它进行分组，
 * 在每组中再进行直接插入排序。当增量减到1时，进行直接插入排序后，排序完成。
 */
let arr = [6, 5, 4, 3, 2, 1];
function hill(data) {
    let gap = 1;
    while (gap < data.length / 2) {
        gap = gap * 2 + 1;
    }
    while (gap >= 1) {
        for (var i = 0; i < data.length; i++) {      //插入排序
            for (j = i; j >= gap && data[j] < data[j - gap]; j -= gap) {
                //类似冒泡排序中的交换位置
                var temp =  data[j-gap]
                data[j- gap] = data[j]
                data[j] = temp
            }
        }
        gap = (gap-1)/2;
    }
    return data;
}
hill(arr);