function solve(A) {
    const n = A.length;
    let odd = 0, even = 0;
    const leftOdd = new Array(n);
    const rightOdd = new Array(n);
    const leftEven = new Array(n);
    const rightEven = new Array(n);

    for (let i = 0; i < n; i++) {
        leftOdd[i] = odd;
        leftEven[i] = even;

        if (i % 2 === 0) {
            even += A[i];
        } else {
            odd += A[i];
        }
    }

    console.log(leftOdd, leftEven)

    odd = 0;
    even = 0;

    for (let i = n - 1; i >= 0; i--) {
        rightOdd[i] = odd;
        rightEven[i] = even;

        if (i % 2 === 0) {
            even += A[i];
        } else {
            odd += A[i];
        }
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        if (leftOdd[i] + rightEven[i] === leftEven[i] + rightOdd[i]) {
            ans++;
        }
    }

    return ans;
}


console.log(solve([5,5,2,8,8]))
