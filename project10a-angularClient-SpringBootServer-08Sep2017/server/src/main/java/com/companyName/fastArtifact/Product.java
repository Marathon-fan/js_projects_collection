package com.companyName.fastArtifact;

public class Product {

    private final long id;
    private final String title;
    private final String description;
    private final double price;


    public Product(long id, String title, String description, double price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }
}
