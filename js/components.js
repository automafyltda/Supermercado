// Component renderers using the SuperMercado source of truth
const Components = {
    // Render a product card
    productCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="price-container">
                    ${product.originalPrice > product.price ? 
                        `<span class="original-price">${SuperMercado.formatPrice(product.originalPrice)}</span>` : 
                        ''}
                    <span class="current-price">${SuperMercado.formatPrice(product.price)}</span>
                    ${product.discount ? 
                        `<span class="discount-badge">-${product.discount}%</span>` : 
                        ''}
                </div>
                <button class="add-to-cart-btn" onclick='SuperMercado.cart.add(${JSON.stringify(product).replace(/'/g, "\\'")})'>
                    <i class="fa-solid fa-cart-plus"></i> ${SuperMercado.getText('addToCart')}
                </button>
            </div>
        `;
        
        return card;
    },

    // Render a category card
    categoryCard(category) {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => {
            window.location.href = `cont-filtrado.html?category=${category.slug}`;
        };
        
        card.innerHTML = `
            <div class="category-icon">
                <i class="fa-solid ${category.icon}"></i>
            </div>
            <h3 class="category-title">${category.name}</h3>
            <p class="category-description">${category.description}</p>
            <span class="product-count">${category.productCount} produtos</span>
        `;
        
        return card;
    },

    // Render cart item
    cartItem(item) {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="cart-item-price">${SuperMercado.formatPrice(item.price)}</p>
                ${item.originalPrice > item.price ? 
                    `<p class="cart-item-original-price"><s>${SuperMercado.formatPrice(item.originalPrice)}</s></p>` : 
                    ''}
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="SuperMercado.cart.updateQuantity(${item.id}, -1)">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="SuperMercado.cart.updateQuantity(${item.id}, 1)">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <button class="remove-btn" onclick="SuperMercado.cart.remove(${item.id})">
                    <i class="fa-solid fa-trash"></i> ${SuperMercado.getText('removeFromCart')}
                </button>
            </div>
        `;
        
        return itemElement;
    },

    // Render empty state
    emptyState(icon, title, message, buttonText, buttonLink) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        
        emptyState.innerHTML = `
            <i class="fa-solid ${icon}"></i>
            <h2>${title}</h2>
            <p>${message}</p>
            ${buttonText && buttonLink ? `
                <a href="${buttonLink}" class="add-to-cart-btn" style="display: inline-block; margin-top: 1rem; text-decoration: none;">
                    ${buttonText}
                </a>
            ` : ''}
        `;
        
        return emptyState;
    },

    // Render loading spinner
    loadingSpinner() {
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        return spinner;
    },

    // Render price with discount
    priceDisplay(product) {
        const container = document.createElement('div');
        container.className = 'price-container';
        
        if (product.originalPrice > product.price) {
            const savings = ((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0);
            container.innerHTML = `
                <span class="original-price">${SuperMercado.formatPrice(product.originalPrice)}</span>
                <span class="current-price">${SuperMercado.formatPrice(product.price)}</span>
                <span class="discount-badge">-${savings}%</span>
            `;
        } else {
            container.innerHTML = `<span class="current-price">${SuperMercado.formatPrice(product.price)}</span>`;
        }
        
        return container;
    }
};

// Make Components available globally
window.Components = Components;