// Centralized Source of Truth for the entire application
const SuperMercado = {
    // Company Information
    company: {
        name: "SuperMercado Ventadas",
        logo: "../assets/images/logo.png",
        logoAlt: "SuperMercado Logo",
        phone: "+55 (00) 99999-9999",
        email: "info@supermercado.com.br",
        address: "Rua dos Ventos Fracos, São Paulo"
    },

    // Navigation Items
    navigation: [
        { id: 'home', label: 'Início', url: 'index.html', icon: 'fa-house' },
        { id: 'categories', label: 'Categorias', url: 'categorias.html', icon: 'fa-tags' },
        { id: 'offers', label: 'Ofertas', url: 'ofertas.html', icon: 'fa-tag' },
        { id: 'cart', label: 'Carrinho', url: 'carrinho.html', icon: 'fa-cart-shopping', hasCount: true }
    ],

    // Social Media Links (with void links)
    socialMedia: [
        { platform: 'facebook', url: '#', icon: 'fa-facebook' },
        { platform: 'instagram', url: '#', icon: 'fa-instagram' },
        { platform: 'twitter', url: '#', icon: 'fa-twitter' }
    ],

    // Footer Information
    footer: {
        copyright: `© ${new Date().getFullYear()} SuperMercado Ventadas. Todos os direitos reservados.`,
    },

    // Location-based settings
    location: {
        currency: 'EUR', // Default
        language: 'pt',  // Default
        region: 'PT'     // Default
    },

    // Available currencies and languages
    config: {
        currencies: {
            EUR: { symbol: '€', code: 'EUR', name: 'Euro' },
            USD: { symbol: '$', code: 'USD', name: 'US Dollar' },
            CAD: { symbol: 'C$', code: 'CAD', name: 'Canadian Dollar' },
            BRL: { symbol: 'R$', code: 'BRL', name: 'Real Brasileiro' },
            MXN: { symbol: '$', code: 'MXN', name: 'Peso Mexicano' },
            GBP: { symbol: '£', code: 'GBP', name: 'British Pound' }
        },
        languages: {
            pt: { code: 'pt', name: 'Português', flag: '🇵🇹' },
            es: { code: 'es', name: 'Español', flag: '🇪🇸' },
            fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
            en: { code: 'en', name: 'English', flag: '🇬🇧' }
        }
    },

    // UI Text in different languages
    uiText: {
        pt: {
            addToCart: "Adicionar ao Carrinho",
            removeFromCart: "Remover",
            checkout: "Finalizar Compra",
            emptyCart: "Seu carrinho está vazio",
            emptyCartMessage: "Explore nossos produtos e adicione itens ao carrinho!",
            seeProducts: "Ver Produtos",
            noOffers: "Não há ofertas no momento",
            noOffersMessage: "Volte mais tarde para conferir nossas promoções!",
            noProducts: "Nenhum produto encontrado",
            noProductsMessage: "Não há produtos disponíveis nesta categoria no momento.",
            subtotal: "Subtotal",
            discounts: "Descontos",
            total: "Total",
            quantity: "Quantidade",
            continueShopping: "Continuar Comprando",
            heroTitle: "Bem-vindo ao SuperMercado",
            heroSubtitle: "Os melhores produtos com os melhores preços",
            featuredProducts: "Produtos em Destaque",
            categories: "Categorias",
            specialOffers: "Ofertas Especiais",
            myCart: "Meu Carrinho",
            orderSummary: "Resumo do Pedido",
            permanentlyClosed: "Estamos permanentemente fechados"
        },
        es: {
            addToCart: "Añadir al Carrito",
            removeFromCart: "Eliminar",
            checkout: "Finalizar Compra",
            emptyCart: "Tu carrito está vacío",
            emptyCartMessage: "¡Explora nuestros productos y añade artículos al carrito!",
            seeProducts: "Ver Productos",
            noOffers: "No hay ofertas en este momento",
            noOffersMessage: "¡Vuelve más tarde para ver nuestras promociones!",
            noProducts: "Ningún producto encontrado",
            noProductsMessage: "No hay productos disponibles en esta categoría.",
            subtotal: "Subtotal",
            discounts: "Descuentos",
            total: "Total",
            quantity: "Cantidad",
            continueShopping: "Seguir Comprando",
            heroTitle: "Bienvenido a SuperMercado",
            heroSubtitle: "Los mejores productos con los mejores precios",
            featuredProducts: "Productos Destacados",
            categories: "Categorías",
            specialOffers: "Ofertas Especiales",
            myCart: "Mi Carrito",
            orderSummary: "Resumen del Pedido",
            permanentlyClosed: "Estamos permanentemente cerrados"
        },
        fr: {
            addToCart: "Ajouter au Panier",
            removeFromCart: "Supprimer",
            checkout: "Finaliser la Commande",
            emptyCart: "Votre panier est vide",
            emptyCartMessage: "Explorez nos produits et ajoutez des articles au panier!",
            seeProducts: "Voir les Produits",
            noOffers: "Aucune offre pour le moment",
            noOffersMessage: "Revenez plus tard pour nos promotions!",
            noProducts: "Aucun produit trouvé",
            noProductsMessage: "Aucun produit disponible dans cette catégorie.",
            subtotal: "Sous-total",
            discounts: "Réductions",
            total: "Total",
            quantity: "Quantité",
            continueShopping: "Continuer les Achats",
            heroTitle: "Bienvenue chez SuperMercado",
            heroSubtitle: "Les meilleurs produits aux meilleurs prix",
            featuredProducts: "Produits en Vedette",
            categories: "Catégories",
            specialOffers: "Offres Spéciales",
            myCart: "Mon Panier",
            orderSummary: "Récapitulatif de la Commande",
            permanentlyClosed: "Nous sommes définitivement fermés"
        },
        en: {
            addToCart: "Add to Cart",
            removeFromCart: "Remove",
            checkout: "Checkout",
            emptyCart: "Your cart is empty",
            emptyCartMessage: "Explore our products and add items to your cart!",
            seeProducts: "See Products",
            noOffers: "No offers at the moment",
            noOffersMessage: "Come back later for our promotions!",
            noProducts: "No products found",
            noProductsMessage: "No products available in this category.",
            subtotal: "Subtotal",
            discounts: "Discounts",
            total: "Total",
            quantity: "Quantity",
            continueShopping: "Continue Shopping",
            heroTitle: "Welcome to SuperMercado",
            heroSubtitle: "The best products at the best prices",
            featuredProducts: "Featured Products",
            categories: "Categories",
            specialOffers: "Special Offers",
            myCart: "My Cart",
            orderSummary: "Order Summary",
            permanentlyClosed: "We are permanently closed"
        }
    },

    // Initialize location detection
    detectLocation() {
        // Try to get location from browser language first
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Map browser language to supported languages
        if (this.config.languages[langCode]) {
            this.location.language = langCode;
        } else {
            this.location.language = 'pt'; // Default to Portuguese
        }

        // Set currency based on language/region
        const currencyMap = {
            'pt': 'EUR',    // Portugal -> Euro
            'br': 'BRL',    // Brazil -> Real
            'es': 'EUR',    // Spain -> Euro
            'mx': 'MXN',    // Mexico -> Peso
            'fr': 'EUR',    // France -> Euro
            'en': 'GBP',    // Default English -> Pound (could also be USD based on region)
            'us': 'USD',    // US -> Dollar
            'ca': 'CAD'     // Canada -> Canadian Dollar
        };

        // Try to get more specific region from browser
        const region = browserLang.split('-')[1]?.toLowerCase() || '';
        if (region && currencyMap[region]) {
            this.location.currency = currencyMap[region];
        } else if (currencyMap[this.location.language]) {
            this.location.currency = currencyMap[this.location.language];
        } else {
            this.location.currency = 'EUR'; // Default to Euro
        }

        console.log(`Detected location: Language=${this.location.language}, Currency=${this.location.currency}`);
    },

    // Get current UI text based on detected language
    getText(key) {
        return this.uiText[this.location.language]?.[key] || this.uiText.pt[key] || key;
    },

    // Format price based on detected currency
    formatPrice(price) {
        const currency = this.config.currencies[this.location.currency];
        if (!currency) return `€${price.toFixed(2)}`; // Fallback to Euro
        
        switch(this.location.currency) {
            case 'EUR':
                return `€${price.toFixed(2)}`;
            case 'USD':
                return `$${price.toFixed(2)}`;
            case 'CAD':
                return `C$${price.toFixed(2)}`;
            case 'BRL':
                return `R$${price.toFixed(2)}`;
            case 'MXN':
                return `$${price.toFixed(2)} MXN`;
            case 'GBP':
                return `£${price.toFixed(2)}`;
            default:
                return `€${price.toFixed(2)}`;
        }
    },

    // Cart Management Methods
    cart: {
        items: [],

        init() {
            const savedCart = localStorage.getItem('supermercado_cart');
            if (savedCart) {
                this.items = JSON.parse(savedCart);
            }
            this.updateCount();
        },

        add(product) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({
                    ...product,
                    quantity: 1
                });
            }
            this.save();
            this.updateCount();
            this.showNotification(`${product.name} ${SuperMercado.getText('addToCart').toLowerCase()}!`);
        },

        remove(productId) {
            this.items = this.items.filter(item => item.id !== productId);
            this.save();
            this.updateCount();
        },

        updateQuantity(productId, change) {
            const item = this.items.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    this.remove(productId);
                } else {
                    this.save();
                }
                this.updateCount();
            }
        },

        getTotalItems() {
            return this.items.reduce((sum, item) => sum + item.quantity, 0);
        },

        getTotals() {
            const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const originalTotal = this.items.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
            const discounts = originalTotal - subtotal;
            return { subtotal, discounts, total: subtotal };
        },

        save() {
            localStorage.setItem('supermercado_cart', JSON.stringify(this.items));
        },

        updateCount() {
            const count = this.getTotalItems();
            document.querySelectorAll('.cart-count').forEach(el => {
                el.textContent = count;
            });
        },

        showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 3000);
        },

        clear() {
            this.items = [];
            this.save();
            this.updateCount();
        }
    },

    // Initialize the application
    init() {
        this.detectLocation();
        this.cart.init();
        this.renderHeader();
        this.renderFooter();
        this.setActiveNavigation();
        this.updatePageLanguage();
    },

    // Update page content with detected language
    updatePageLanguage() {
        // Update hero section if exists
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero p');
        if (heroTitle) heroTitle.textContent = this.getText('heroTitle');
        if (heroSubtitle) heroSubtitle.textContent = this.getText('heroSubtitle');

        // Update section titles
        const featuredTitle = document.querySelector('.products-section h2');
        if (featuredTitle) featuredTitle.textContent = this.getText('featuredProducts');

        const categoriesTitle = document.querySelector('.categories-section h1');
        if (categoriesTitle) categoriesTitle.textContent = this.getText('categories');

        const offersTitle = document.querySelector('.offers-section h1');
        if (offersTitle) offersTitle.textContent = this.getText('specialOffers');
    },

    // Render header across all pages
    renderHeader() {
        const headerPlaceholders = document.querySelectorAll('.header-placeholder');
        headerPlaceholders.forEach(placeholder => {
            placeholder.innerHTML = this.getHeaderHTML();
        });
    },

    // Get header HTML
    getHeaderHTML() {
        return `
            <header class="sticky-header">
                <div class="header-container">
                    <div class="logo-container" onclick="window.location.href='index.html'">
                        <img src="${this.company.logo}" alt="${this.company.logoAlt}" class="logo">
                        <span class="company-name">${this.company.name}</span>
                    </div>
                    <nav class="main-nav">
                        <ul>
                            ${this.navigation.map(item => `
                                <li>
                                    <a href="${item.url}" data-nav-id="${item.id}" class="nav-link">
                                        <i class="fa-solid ${item.icon}"></i>
                                        ${item.label}
                                        ${item.hasCount ? '<span class="cart-count"></span>' : ''}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    },

    // Cart Management Methods - with improved initialization
    cart: {
        items: [],

        init() {
            const savedCart = localStorage.getItem('supermercado_cart');
            if (savedCart) {
                try {
                    this.items = JSON.parse(savedCart);
                } catch (e) {
                    console.error('Error parsing cart from localStorage', e);
                    this.items = [];
                }
            } else {
                this.items = [];
            }
            // Force immediate update of cart count after initialization
            setTimeout(() => this.updateCount(), 0);
            return this.items;
        },

        add(product) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({
                    ...product,
                    quantity: 1
                });
            }
            this.save();
            this.updateCount();
            this.showNotification(`${product.name} ${SuperMercado.getText('addToCart').toLowerCase()}!`);
        },

        remove(productId) {
            this.items = this.items.filter(item => item.id !== productId);
            this.save();
            this.updateCount();
        },

        updateQuantity(productId, change) {
            const item = this.items.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    this.remove(productId);
                } else {
                    this.save();
                }
                this.updateCount();
            }
        },

        getTotalItems() {
            return this.items.reduce((sum, item) => sum + item.quantity, 0);
        },

        getTotals() {
            const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const originalTotal = this.items.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
            const discounts = originalTotal - subtotal;
            return { subtotal, discounts, total: subtotal };
        },

        save() {
            localStorage.setItem('supermercado_cart', JSON.stringify(this.items));
        },

        updateCount() {
            const count = this.getTotalItems();
            document.querySelectorAll('.cart-count').forEach(el => {
                el.textContent = count;
            });
        },

        showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 3000);
        },

        clear() {
            this.items = [];
            this.save();
            this.updateCount();
        }
    },

    // Initialize the application - FIXED initialization order
    init() {
        this.detectLocation();
        
        // First render the header (with empty cart placeholders)
        this.renderHeader();
        
        // Then initialize cart (loads from localStorage)
        this.cart.init();
        
        // Then render footer and other elements
        this.renderFooter();
        this.setActiveNavigation();
        this.updatePageLanguage();
        
        // Double-check cart count after everything is loaded
        setTimeout(() => this.cart.updateCount(), 50);
    },

    // Render footer across all pages
    renderFooter() {
        const footerPlaceholders = document.querySelectorAll('.footer-placeholder');
        footerPlaceholders.forEach(placeholder => {
            placeholder.innerHTML = this.getFooterHTML();
        });
    },

    getFooterHTML() {
        return `
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>${this.company.name}</h4>
                        <p><i class="fa-solid fa-phone"></i> ${this.company.phone}</p>
                        <p><i class="fa-solid fa-envelope"></i> ${this.company.email}</p>
                        <p><i class="fa-solid fa-location-dot"></i> ${this.company.address}</p>
                    </div>
                    <div class="footer-section">
                        <h4>Redes Sociais</h4>
                        <div class="social-links">
                            ${this.socialMedia.map(social => `
                                <a href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="${social.platform}">
                                    <i class="fa-brands ${social.icon}"></i>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>${this.footer.copyright}</p>
                </div>
            </footer>
        `;
    },

    // Set active navigation based on current page
    setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    },

    // Get current page context
    getCurrentPage() {
        return window.location.pathname.split('/').pop() || 'index.html';
    },

    // Check if current page is a specific type
    isPage(pageName) {
        return this.getCurrentPage() === pageName;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => SuperMercado.init());