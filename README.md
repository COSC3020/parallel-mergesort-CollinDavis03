# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.


## Answer
We have a recursive divide and conquer which will divide the array into 2 halves going from n/2, n/4, n/8, all the way down to size 1.

With Promise.all it is making sure there is a parallel execution. 

We know that the merging takes $\Theta(n)$ time sequentially for an array of size n. 

$T_{span}(n) = T_{span}(n/2) + \Theta(n)$

When we apply all the other n/4 and n/8 so it goes down to the size of $\Theta(1)$ it will give us 

Thus the span is: 

$T_{span}(n) = \Theta(log n) * \Theta(n)$

the worst-case runtime would be $\Theta(log n) * \Theta(n)$ or would just be $\Theta(n)$ but the total runtime is $\Theta(n log n)$. Since we are doing Span then it would be $\Theta(n)$

## Mistake 
The linear runtime is coming from the merge step in the code. This happens because the arrays are sorted into halves and they get compared. Then, it is copied into a temporary array and will be put back into the original when necessary. For an array the size of n, this process requires iterating over all the elements n, which will give us a $\Theta(n)$ operation. 

## Sources 
I looked at this website here to better understand parallel mergesort because we had not learned it in class yet. https://rachitvasudeva.medium.com/parallel-merge-sort-algorithm-e8175ab60e7 . https://github.com/ahmet-uyar/parallel-merge-sort I looked at his personal repo to get an idea of where to start and how to do everything properly. I also looked up if there were any kinds of code or functions that you can use that will have parallelism involved in it. It said to try using async and Promise.all. When I implemented that into my code it worked perfectly fine. 

## Plagarism Statement
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
