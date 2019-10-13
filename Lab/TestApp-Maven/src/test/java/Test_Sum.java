import org.junit.Assert;

import static org.junit.jupiter.api.Assertions.*;

class Test_Sum {
    Sum _sum;
    @org.junit.jupiter.api.BeforeEach
    void setUp() {
        _sum = new Sum();
    }

    @org.junit.jupiter.api.AfterEach
    void tearDown() {
    }

    @org.junit.jupiter.api.Test
    void test_Add() {
        int result = _sum.Add(10, 15);
        Assert.assertEquals(25, result);
    }
    @org.junit.jupiter.api.Test
    void test_Add16_51() {
        int result = _sum.Add(16, 51);
        Assert.assertEquals(67, result);
    }
}