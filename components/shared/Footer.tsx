const Footer = () => {
    return (
        <footer className="flex justify-center px-8 py-10 bg-white dark:bg-black">
            <p className="text-sm text-gray-700 dark:text-gray-300">© Dennis Jonathan {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
