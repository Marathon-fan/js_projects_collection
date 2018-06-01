package com.companyName.fastArtifact;

import java.util.concurrent.atomic.AtomicLong;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/api")
@RestController
public class ProductController {

    private static final String title_Template = "product with type # ";
    private static final String description_template = "product with title ";

    private final AtomicLong counter = new AtomicLong();
    private static Logger logger = LoggerFactory.getLogger(ProductController.class);

    @RequestMapping("/products")
    public Product[] Products(@RequestParam(value="name", defaultValue="World") String name) {
        int product_number = 1 + (int)(Math.random() * 5);

        logger.debug("ProductController - " + product_number  + " products");

        Product[] res = new Product[product_number];
        for (int i = 0; i < product_number; i++){
            res[i] = new Product(counter.incrementAndGet(),
                    title_Template + (int)(1 + Math.random() * 40),
                    description_template + (int)(1 + Math.random() * 1000),
                    1 + Math.random() * 300);
        }
        return res;
    }
}
