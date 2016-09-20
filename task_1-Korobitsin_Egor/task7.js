function triangle(maxDivisors) {
    var n = 1;
    while (true) {
        var triangleNumber = n * (n + 1) / 2;

        var primeFactors = {};

        var i = 2;
        for (var result = triangleNumber; result > 1;) {
            if (result % i == 0) {
                if (primeFactors.hasOwnProperty(i)) {
                    primeFactors[i]++;
                } else {
                    primeFactors[i] = 1;
                }
                result /= i;
            } else {
                i++;
            }
        }

        // Sieve of Atkin ?
        var divisorsCount = 1;
        for (var divisor in primeFactors) {
            if (primeFactors.hasOwnProperty(divisor)) {
                divisorsCount *= primeFactors[divisor] + 1;
            }
        }

        if (divisorsCount >= maxDivisors) {
            return triangleNumber;
        }

        n++;
    }
}