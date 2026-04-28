            self.expression = ""

            self.display_var.set("0")

 

def main():

    """Main function to run the calculator"""

    root = tk.Tk()

    calculator = ScientificCalculator(root)

    root.mainloop()

 

if __name__ == "__main__":

    main()
